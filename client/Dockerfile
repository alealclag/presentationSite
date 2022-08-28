FROM node:16.17.0-slim
WORKDIR /front
COPY . /front
RUN npm install
RUN npm install -g serve
# RUN npm run build

# CMD serve -s build
CMD npm start