# echizen-city-web

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

This repository provides static HTML templates for a fictional Echizen City government website, designed for citizen and tourist information. The templates are built with Bootstrap 4 and demonstrate how to structure a local government portal.

## Demos

This project includes two distinct template designs:

- **Demo 1:** [https://code4fukui.github.io/echizen-city-web/static/demo1/](https://code4fukui.github.io/echizen-city-web/static/demo1/)
- **Demo 2:** [https://code4fukui.github.io/echizen-city-web/static/demo2/](https://code4fukui.github.io/echizen-city-web/static/demo2/)

Demo 1 features a clean layout with a prominent hero image, news updates, and service categories. Demo 2 provides an alternative navigation structure focused on key life events.

## Features

- **Two Responsive Templates**: Includes two distinct, mobile-friendly designs (`demo1` and `demo2`) built with the Bootstrap 4 framework.
- **Dynamic Content Generation**: The `demo1` pages are generated from a simple CSV file (`pagelist.csv`) using a Deno script, making it easy to manage content.
- **Citizen-Centric Navigation**: Menus are organized around common citizen needs and life events, such as:
  - Pregnancy & Childbirth
  - Childcare
  - School Enrollment
  - Moving
  - Marriage & Divorce
- **Ready-to-Use Components**: Includes pre-styled sections for news announcements, service menus, and contact information.

## Usage

There are two ways to use this project:

### 1. Use the Static HTML

You can directly use the generated HTML files. Copy the contents of `static/demo1/` or `static/demo2/` to your web server and customize them.

### 2. Generate Pages from Data

The pages in `demo1` are generated from `pagelist.csv`. You can modify this CSV and regenerate the