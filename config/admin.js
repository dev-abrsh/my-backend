module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e30e372907d4c4b5ab0e975e0121b5b8'),
  },
});
