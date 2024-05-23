The goal of this coding exam is to quickly get you off the ground with **Dynamic Styling Using Styled Components**.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/text-editor-md-output-v2.png" alt="text-editor-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Text Editor](https://assets.ccbp.in/frontend/content/react-js/text-editor-md-output-v2.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- Initially, **#f1f5f9** color is applied to all the three **bold icon**, **italic icon**, **underline icon** buttons

- When the **bold icon** button is clicked,

  - It will change to an active state by applying the **#faff00** color
  - The **bold** font-weight is applied to the text in the HTML textarea element
  - If the **bold icon** button is already in the active state,
    - The respective button should be inactive by applying **#f1f5f9** color
    - The **normal** font-weight is applied to the text in the HTML textarea element

- When the **italic icon** button is clicked,

  - It will change to an active state by applying the **#faff00** color
  - The **italic** font-style is applied to the text in the HTML textarea element
  - If the **italic icon** button is already in the active state,
    - The respective button should be inactive by applying **#f1f5f9** color
    - The **normal** font-style is applied to the text in the HTML textarea element

- When the **underline icon** button is clicked,

  - It will change to an active state by applying the **#faff00** color
  - The **underline** text-decoration is applied to the text in the HTML textarea element
  - If the **underline icon** button is already in the active state,
    - The respective button should be inactive by applying **#f1f5f9** color
    - The **normal** text-decoration is applied to the text in the HTML textarea element

- More than one button can be active at a time and more than one style can be applied to the text in the HTML textarea element

  </details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- `VscBold`, `GoItalic` and `AiOutlineUnderline` icons from react-icons should be used for `bold`, `italic` and `underline` buttons respectively
- Wrap the `VscBold` component with an HTML button element and add the `data-testid` attribute value as `bold`
- Wrap the `GoItalic` component with an HTML button element and add the `data-testid` attribute value as `italic`
- Wrap the `AiOutlineUnderline` component with an HTML button element and add the `data-testid` attribute value as `underline`

**Example:**

```jsx
<Button data-testid="bold">
  <VscBold size={25} />
</Button>
```

- Use `styled-components` for styling elements

</details>

### Resources

<details>

<summary>Image URLs</summary>
<br/>

- [https://assets.ccbp.in/frontend/react-js/text-editor-img.png](https://assets.ccbp.in/frontend/react-js/text-editor-img.png) alt should be **text editor**

</details>
