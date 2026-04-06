const sapaUser = (nama) => {
  return 'Halo ' + nama + ', selamat datang di WSL!';
};

const formatWaktu = () => {
  return new Date().toLocaleString();
};

module.exports = { sapaUser, formatWaktu };
