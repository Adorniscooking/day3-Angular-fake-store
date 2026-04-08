# E-commerce Application

This is a modern E-commerce application built with **Angular (v21.2.1)** and **TypeScript**. It serves as a frontend storefront that displays products, allows users to view product details, and manages a shopping cart.

## Features

- **Product Catalog**: Fetches and displays products from the [Fake Store API](https://fakestoreapi.com/).
- **Product Details**: Dedicated pages to view detailed information about an individual product.
- **Shopping Cart**: Functional cart logic using Angular Signals for reactive state management (add, remove, update quantities, calculate total).
- **Routing**: Seamless navigation between Home, Product Listing, Contact, and Cart pages.
- **UI Components**: Modular components including Navbar, Footer, Cards, Carousel, and Accordion elements.

## Tech Stack

- **Framework**: Angular v21
- **Language**: TypeScript
- **State Management**: Angular Signals ([CartService](cci:2://file:///d:/nest%20frontend/day5/last%20section/Ecommerce/src/app/cart.service.ts:2:0-57:1))
- **API Integration**: `HttpClient` interacting with FakeStoreAPI
- **Testing**: Vitest for unit testing

## Project Structure

- `src/app/home/` - Landing page component
- `src/app/product/` - Products listing view
- `src/app/product-details/` - Individual product page showing detailed descriptions
- `src/app/cart/` - Cart view and cart state operations
- `src/app/contact/` - Contact us page
- `src/app/api-service.ts` - HTTP Service for fetching products data
- `src/app/cart.service.ts` - Signals-based state logic for cart management

## Setup and Development

1. **Install Dependencies**
   ```bash
   npm install
