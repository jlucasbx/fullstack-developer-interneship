

// This function returns a reusable html element like in React
export default function SearchInput({placeholder,id}) {
  return `
  <div class="search">
    <input type="text" placeholder="${placeholder}" id="${id}">
  </div>
  `;

}
