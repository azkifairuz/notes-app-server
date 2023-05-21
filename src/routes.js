const {
  addNoteHandler,
  getAllNotesHandler,
  getNotesByIdHandler,
  editNotesByIdHanler,
  deleteNotesById,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNotesByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNotesByIdHanler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNotesById,
  },
];

module.exports = routes;
