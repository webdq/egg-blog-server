FROM docker.io/node

RUN mkdir -p /home/egg-blog-be
WORKDIR /home/egg-blog-be
COPY . /home/egg-blog-be
RUN npm install
EXPOSE 7001
CMD [ "npm", "start" ]