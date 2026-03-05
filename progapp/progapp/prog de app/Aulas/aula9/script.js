const fetchData = async () => {
    const people = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await people.json();
    console.log(data);
};

fetchData(); // <-- chama a função