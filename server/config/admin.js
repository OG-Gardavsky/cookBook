module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4c5d3b340f0a7aac34f7e638377f5df7'),
  },
});
