//Footer UI Tests
import React from "react";
import { describe,expect, test } from 'vitest';
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

import Footer from "./Footer.jsx";
// import { ThemeProvider } from '@providers/themeProvider';
// import { STORAGE_KEY } from "@/constants/themeConstants";

function renderFooter() {
    return render (<Footer />);
}

describe('Footer', () => {
    test('render footer attribution text', () => {
        renderFooter();

        //check for challenge attribution text
        expect(
            screen.getByText(/challenge by/i)).toBeInTheDocument();

        //coded by text
        expect(
            screen.getByText(/coded by/i)).toBeInTheDocument();

    });
});
