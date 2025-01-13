const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

document.getElementById('breakfastHeader').addEventListener('click', function () {
    const breakfastMenuItems = document.getElementById('breakfastMenuItems');
    if (breakfastMenuItems.style.display === 'none' || breakfastMenuItems.style.display === '') {
        const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
        breakfastMenuItems.innerHTML = breakfastMenuItemsHTML;
        breakfastMenuItems.style.display = 'block';  // Show the menu
    } else {
        breakfastMenuItems.style.display = 'none';  // Hide the menu
    }
});

document.getElementById('maincourseHeader').addEventListener('click', function () {
    const maincourseMenuItems = document.getElementById('maincourseMenuItems');
    if (maincourseMenuItems.style.display === 'none' || maincourseMenuItems.style.display === '') {
        let mainCourseItem = '';
        mainCourseMenu.forEach((item, index) => {
            mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
        });
        maincourseMenuItems.innerHTML = mainCourseItem;
        maincourseMenuItems.style.display = 'block';  // Show the menu
    } else {
        maincourseMenuItems.style.display = 'none';  // Hide the menu
    }
});

document.getElementById('dessertHeader').addEventListener('click', function () {
    const dessertMenuItems = document.getElementById('dessertMenuItems');
    if (dessertMenuItems.style.display === 'none' || dessertMenuItems.style.display === '') {
        let dessertItem = '';
        for (let i = 0; i < dessertMenu.length; i++) {
            dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
        }
        dessertMenuItems.innerHTML = dessertItem;
        dessertMenuItems.style.display = 'block';  // Show the menu
    } else {
        dessertMenuItems.style.display = 'none';  // Hide the menu
    }
});
