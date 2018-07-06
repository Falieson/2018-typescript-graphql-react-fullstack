# Install MongoDB

If you don't have MongoDB installed you'll get the error
```
[mongo] nps is executing `start.mongo` : mongod --dbpath ./db/ --port 27000
[mongo] /bin/sh: 1: mongod: not found
```

This means you need to install!

[Ubuntu Instructions](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) that I am essenteially copy pasting here.

## Steps

- `sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4`
- (ubu16 only) `echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list`
- `sudo apt-get update`
- `sudo apt-get install -y mongodb-org mongodb-org-server libcurl3`

If you hit some issues you may have to run the additional commands...

```bash
sudo dpkg -i --force-all /var/cache/apt/archives/mongodb-org-tools_4.0.0_amd64.deb
sudo apt --fix-broken install
```
