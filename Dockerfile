FROM node:12.20
RUN mkdir /usr/src/app
RUN cd /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install -g @angular/cli
RUN npm i
COPY . .
CMD ["ng","serve", "--port" , "2" ,"--host", "0.0.0.0", "--disable-host-check"]
EXPOSE 2
