import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import Services from "../Admin/AdminServices.jsx";
import "@testing-library/jest-dom";

jest.mock("axios");

describe("Services Component", () => {
  test("renders services", async () => {
    const fakeServices = [
      {
        id: 1,
        alt_description: "Service 1",
        description: "Description 1",
        urls: { thumb: "image1.jpg" },
      },
      {
        id: 2,
        alt_description: "Service 2",
        description: "Description 2",
        urls: { thumb: "image2.jpg" },
      },
    ];

    axios.get.mockResolvedValueOnce({ data: fakeServices });

    render(<Services />);

    await waitFor(() => {
      expect(screen.getByText("Service 1")).toBeInTheDocument();
      expect(screen.getByText("Service 2")).toBeInTheDocument();
    });
  });

  test("opens and closes the modal", async () => {
    const fakeService = {
      id: 1,
      alt_description: "Service 1",
      description: "Description 1",
      urls: { thumb: "image1.jpg" },
    };

    axios.get.mockResolvedValueOnce({ data: [fakeService] });

    render(<Services />);

    await waitFor(() => {
      expect(screen.getByText("Service 1")).toBeInTheDocument();
    });

    // Click the Edit button to open the modal
    fireEvent.click(screen.getByText("Edit"));

    // Check if the modal is open
    expect(screen.getByText("Edit Service")).toBeInTheDocument();

    // Close the modal
    fireEvent.click(screen.getByText("Close"));

    // Check if the modal is closed
    await waitFor(() => {
      expect(screen.queryByText("Edit Service")).not.toBeInTheDocument();
    });
  });

  test("displays loading spinner while services are being fetched", async () => {
    axios.get.mockResolvedValueOnce({ data: [] });

    render(<Services />);

    // Check if the loading spinner is displayed initially
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();

    // Wait for services to load
    await waitFor(() => {
      expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument();
    });

    // Check if the loading spinner is removed after services are loaded
    expect(screen.queryByTestId("loading-spinner")).toBeNull();
  });
});
