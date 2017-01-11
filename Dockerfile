FROM node

RUN npm set progress=false
RUN npm config set registry https://registry.npmjs.org

# # Gulp, bower
# RUN npm install -g gulp bower --unsafe-perm --ingore-scripts

RUN mkdir -p /install
WORKDIR /install
COPY package.json /install/package.json
RUN npm install --unsafe-perm --ingore-scripts

WORKDIR /src
# RUN mkdir -p /app
# WORKDIR /app

# ADD bower.json /app/bower.json
# ADD gulpfile.js /app/gulpfile.js

# # RUN echo '{ "allow_root": true }' > /root/.bowerrc
# RUN bower install --allow-root --config.interactive=false -s

# ADD . /app
# EXPOSE 3000

# CMD ["gulp"]
