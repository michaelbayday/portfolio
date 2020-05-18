module.exports = {
  apps: {
    name: 'mdnh.io',
    script: 'npm run start:myproxy << /home/myproxy/.pm2/logs/mdnh.io-out.log',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env_production: {
      NODE_ENV: 'production',
      PORT: 3002,
      WORKPATH: '/home/myproxy',
    },
    error_file: '/home/myproxy/.pm2/logs/mdnh.io-err.log',
    merge_logs: true,
  },
};
