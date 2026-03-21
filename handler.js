const { nanoid } = require('nanoid');
const books = require('./books');

// Handler untuk menambah/menyimpan buku (Kriteria 3 : API dapat menyimpan buku)
const addBookHandler = (request, h) => {
  const {
    name, year, author, summary,
    publisher, pageCount, readPage, reading,
  } = request.payload;

  // Error 400: Bad Request (Client tidak melampirkan properti name pada request body)
  if (!name) {
    return h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    }).code(400);
  }

  // Error 400: Bad Request (Client melampirkan nilai properti readPage yang lebih besar dari nilai properti pageCount)
  if (readPage > pageCount) {
    return h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    }).code(400);
  }

  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const finished = pageCount === readPage;

  const newBook = {
    id, name, year, author, summary,
    publisher, pageCount, readPage,
    finished, reading, insertedAt, updatedAt
  };

  
  books.push(newBook);

  // Success 201: Created (Buku berhasil ditambahkan)
  return h.response({
    status: 'success',
    message: 'Buku berhasil ditambahkan',
    data: {
      bookId: id
    }
  }).code(201);
};

// Handler untuk mendapatkan seluruh buku, dengan fitur query parameter (Kriteria 4 : API dapat menampilkan seluruh buku)
const getAllBooksHandler = (request) => {
  const { name, reading, finished } = request.query;

  let filteredBooks = books;

  // Filter berdasarkan nama buku, non-case sensitive
  if (name !== undefined) {
    filteredBooks = filteredBooks.filter((book) =>
      book.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  // Filter berdasarkan status membaca
  if (reading !== undefined) {
    filteredBooks = filteredBooks.filter((book) =>
      book.reading === !!Number(reading)
    );
  }

  // Filter berdasarkan status selesai
  if (finished !== undefined) {
    filteredBooks = filteredBooks.filter((book) =>
      book.finished === !!Number(finished)
    );
  }

  const responseBooks = filteredBooks.map(({ id, name, publisher }) => ({
    id,
    name,
    publisher,
  }));

  // Success 200: OK (Buku berhasil didapatkan)
  return {
    status: 'success',
    data: {
      books: responseBooks
    }
  };
};

// Handler untuk mendapatkan detail buku (Kriteria 5 : API dapat menampilkan detail buku)
const getBookByIdHandler = (request, h) => {
  const { id } = request.params;

  const book = books.find((b) => b.id === id);

  // Error 404: Not Found (Buku tidak ditemukan)
  if (!book) {
    return h.response({
      status: 'fail',
      message: 'Buku tidak ditemukan'
    }).code(404);
  }

  // Success 200: OK (Buku berhasil didapatkan)
  return {
    status: 'success',
    data: { book }
  };
};

// Handler untuk mengubah data buku (Kriteria 6 : API dapat mengubah data buku)
const updateBookHandler = (request, h) => {
  const { id } = request.params;
  const {
    name, year, author, summary,
    publisher, pageCount, readPage, reading,
  } = request.payload;

  const index = books.findIndex((b) => b.id === id);

  // Error 404: Not Found (Buku tidak ditemukan)
  if (index === -1) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan'
    }).code(404);
  }

  // Error 400: Bad Request (Client tidak melampirkan properti name pada request body)
  if (!name) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku'
    }).code(400);
  }

  // Error 400: Bad Request (Client melampirkan nilai properti readPage yang lebih besar dari nilai properti pageCount)
  if (readPage > pageCount) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount'
    }).code(400);
  }

  const updatedAt = new Date().toISOString();
  const finished = pageCount === readPage;

  // Memperbarui data buku
  books[index] = {
    ...books[index],
    name, year, author, summary,
    publisher, pageCount, readPage,
    finished, reading, updatedAt
  };

  // Success 200: OK (Buku berhasil diperbarui)
  return {
    status: 'success',
    message: 'Buku berhasil diperbarui'
  };
};

// Handler untuk menghapus buku (Kriteria 7 : API dapat menghapus buku)
const deleteBookHandler = (request, h) => {
  const { id } = request.params;

  const index = books.findIndex((b) => b.id === id);

  // Error 404: Not Found (Buku tidak ditemukan)
  if (index === -1) {
    return h.response({
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan'
    }).code(404);
  }

  // Menghapus buku dari array
  books.splice(index, 1);

  // Success 200: OK (Buku berhasil dihapus)
  return {
    status: 'success',
    message: 'Buku berhasil dihapus'
  };
};

module.exports = {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  updateBookHandler,
  deleteBookHandler
};
