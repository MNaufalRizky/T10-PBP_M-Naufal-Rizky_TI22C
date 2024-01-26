const mahasiswaNim = '09072004';
const updatedData = {
    nama: 'Opal',
    gender: 'L',
    prodi: 'TE',
    alamat: 'Sukabumi'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'aplication/json'
    },
    body: JSON.stringify(updatedData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));