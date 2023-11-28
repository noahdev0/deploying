import axios from "axios";
import { render, screen, fireEvent } from "@testing-library/react";
import Register from "./register";

jest.mock("axios");

describe("Register Page", () => {
  test("should handle form submission successfully", async () => {
    const mockPost = jest.spyOn(axios, "post");
    mockPost.mockResolvedValueOnce({ data: {} });

    render(<Register />);

    // Fill in form fields
    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText("Last Name"), {
      target: { value: "Doe" },
    });
    // ... fill in other form fields

    // Submit the form
    fireEvent.click(screen.getByText("Submit"));

    // Wait for the form submission to complete
    await screen.findByText("success");

    // Assert that the axios.post function was called with the correct data
    expect(mockPost).toHaveBeenCalledWith("/api/addUser", {
      name: "John",
      lastName: "Doe",
      // ... other form field values
    });

    // Assert that the success message is displayed
    expect(
      screen.getByText("Message has been sent successfully")
    ).toBeInTheDocument();
  });

  test("should handle form submission with error", async () => {
    const mockPost = jest.spyOn(axios, "post");
    mockPost.mockRejectedValueOnce(new Error("Network Error"));

    render(<Register />);

    // Fill in form fields
    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText("Last Name"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText("Phone"), {
      target: { value: "1234567890" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "nouhbenzinaa@gmail.com" },
    });
    fireEvent.change(screen.getByLabelText("Address"), {
      target: { value: "sfax" },
    });
    fireEvent.change(screen.getByLabelText("Title"), {
      target: { value: "hello" },
    });
    fireEvent.change(screen.getByLabelText("Message"), {
      target: { value: "hello" },
    });
    fireEvent.change(screen.getByLabelText("Option1"), {
      target: { value: "option1" },
    });

   

    // Submit the form
    fireEvent.click(screen.getByText("Submit"));

    // Wait for the form submission to complete
    await screen.findByText("The error is: Network Error");

    // Assert that the axios.post function was called with the correct data
    expect(mockPost).toHaveBeenCalledWith("/api/addUser", {
      name: "John",
      lastName: "Doe",
      phone: "1234567890",
      email: "nouhbenzinaa@gmail.com",
      address: "sfax",
      message: "hello",
      title: "hello",
      selectedOption: "option1",

      // ... other form field values
    });

    // Assert that the error message is displayed
    expect(screen.getByText("The error is: Network Error")).toBeInTheDocument();
  });
});
