import { render, screen, act, waitFor } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from 'vitest';
import MyBookings from "./MyBookings";
import AuthContext from "../../contexts/AuthContext";
import * as bookingService from "../../services/bookingService";
import { toast } from "react-toastify";

vi.mock("../../services/bookingService");
vi.mock("react-toastify");

describe("MyBookings Component", () => {
    const mockBookings = [{ _id: 1 }, { _id: 2 }];

    beforeEach(() => {
        bookingService.getAllForUser.mockResolvedValue(mockBookings);
        toast.success.mockImplementation(() => { });
        toast.error.mockImplementation(() => { });
    });

    it("renders no bookings message when there are no bookings", async () => {
        bookingService.getAllForUser.mockResolvedValueOnce([]);
        render(
            <AuthContext.Provider value={{ userId: "123" }}>
                <MyBookings />
            </AuthContext.Provider>
        );
        await waitFor(() => {
            expect(screen.getByText("You have no bookings made.")).toBeInTheDocument();
        });
    });

    it("renders bookings when there are bookings", async () => {
        render(
            <AuthContext.Provider value={{ userId: "123" }}>
                <MyBookings />
            </AuthContext.Provider>
        );

        const bookingCards = await screen.findAllByTestId("booking-card"); 
        expect(bookingCards.length).toBe(mockBookings.length);
    });

});
