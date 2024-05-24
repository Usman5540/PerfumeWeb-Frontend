1: error
Property 'productCard' does not exist on type 'JSX.IntrinsicElements'.ts(2339)
({ name, photo, price, quantity, \_id }: OrderItemType) => JSX.Element
solution

In your code, productCard is a function component, but in JSX, components should be capitalized. When you use lowercase names like 'productCard' in JSX, TypeScript interprets them as intrinsic HTML elements like <div> or <span>, hence the error.
2: error,
when i loads linechar component that gone away
solution :
i did not register that yeah

3: using onclick in form sumbition whcih leading to below answer
undefined undifined .....
solution
for always take onsumbit not on click
