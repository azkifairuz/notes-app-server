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

  // ngepush array note dan diisi sesuai inputan user
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
    response.header('Access-Control-Allow-Origin', '*');
    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'failed',
    message: 'Catatan gagal dibuat karena id sudah ada',
  });
  response.header('Access-Control-Allow-Origin', '*');

  response.code(500);
  return response;
};

const getAllNotesHandler = () => ({
  status: 'success',
  data: {
    notes,
  },
});

const getNotesByIdHandler = (request, h) => {
  const { id } = request.params;

  const note = notes.filter((n) => n.id === id)[0];

  if (note !== undefined) {
    const response = h.response({
      status: 'succes',
      message: 'data behrhasil di dapat',
      data: {
        notes,
      },
    });
    return response;
  }

  const response = h.response({
    status: 'failed',
    message: `catatan dengan ${id} tidak ditemukan`,
  });
  response.code(400);
  return response;
};

module.exports = { addNoteHandler, getAllNotesHandler, getNotesByIdHandler };
