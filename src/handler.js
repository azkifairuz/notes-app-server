// eslint-disable-next-line import/no-extraneous-dependencies
const { nanoid } = require('nanoid');
const notes = require('./note');

const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload;

  const id = nanoid(16);

  const createdAt = new Date().toISOString;
  const updatedAt = createdAt;

  const newNotes = {
    id, title, tags, body, createdAt, updatedAt,
  };

  // ngepsh array note dan diisi sesuai inputan user
  notes.push(newNotes);
  // ngecek apkah user sudah ada
  const isSuccses = notes.filter((note) => note.id === id).length > 0;

  if (isSuccses) {
    const response = h.response({
      status: 'succes',
      message: 'Catatan Berhasil Ditambahkan',
      data: {
        noteId: id,
      },
    });

    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'failed',
    message: 'Catatan gagal dibuat karena id sudah ada',
  });
  response.code(500);
  return response;
};

module.exports = addNoteHandler;
