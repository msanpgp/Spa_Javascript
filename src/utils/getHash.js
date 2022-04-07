// cuando el arrow function solo usa una linea no es necesario usar los brackets
const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export default getHash;