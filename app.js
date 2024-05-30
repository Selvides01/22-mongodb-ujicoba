const { MongoClient, ObjectId } = require('mongodb');

const uri = "mongodb://127.0.0.1:27017";
const dbname = "wpu";

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

client.connect((error, client) => {
    if (error) {
        return console.log('Koneksi gagal');
    }

    // Pilih database
    const db = client.db(dbname);

    // Menambah 1 data ke koleksi mahasiswa
    // db.collection('students').insertOne(
    //     {
    //         nama: 'arik',
    //         email: 'arik@gmail.com'
    //     },
    //     (error, result) => {
    //         if (error) {
    //             return console.log('Gagal menambahkan data!');
    //         }
    //         console.log(result);
    //     }
    // );

    // Menambah banyak data ke koleksi mahasiswa
    // db.collection('students').insertMany(
    //     [
    //         {
    //             nama: 'arik',
    //             email: 'arik@gmail.com'
    //         },
    //         {
    //             nama: 'orik',
    //             email: 'orik@gmail.com'
    //         },
    //     ],
    //     (error, result) => {
    //         if (error) {
    //             return console.log('Gagal menambahkan data!');
    //         }
    //         console.log(result);
    //     }
    // );

    // Menampilkan semua data yang ada di koleksi students
    // db.collection('students').find().toArray((error, result) => {
    //     if (error) {
    //         return console.log('Gagal mengambil data!');
    //     }
    //     console.log(result);
    // });

    // Menampilkan data berdasarkan id yang ada di koleksi students
    // db.collection('students').find({_id: ObjectId('6656b9b8bbad9389e0fda517')}).toArray((error, result) => {
    //     if (error) {
    //         return console.log('Gagal mengambil data!');
    //     }
    //     console.log(result);
    // });

    // Mengubah data berdasarkan id
    // db.collection('students').updateOne(
    //     {
    //         _id: ObjectId('6656b9b8bbad9389e0fda517')
    //     },
    //     {
    //         $set: {
    //             email: 'orik@gmail.com',
    //         },
    //     }
    // ).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });

    // Mengubah data lebih dari 1, berdasarkan kriteria
    // db.collection('students').updateMany(
    //     {
    //         nama: 'arik',
    //     },
    //     {
    //         $set: {
    //             nama: 'arik doang',
    //         },
    //     }
    // ).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });

    // Menghapus 1 data
    // db.collection('students')
    //     .deleteOne({
    //         _id: ObjectId('6656f7915c0255681f5d219d'),
    //     })
    //     .then((result) => {
    //         console.log(result);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });

    //menghapus dari 1 data
    db.collection('students')
    .deleteMany({
        nama: 'arik doang',
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
});
