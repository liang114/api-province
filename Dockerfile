FROM node:lts-alpine3.20

RUN apk add --no-cache gcc g++ git make unzip bash

COPY ./package.json .
COPY ./package-lock.json .


RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm","start" ]


#FROM nginx:latest
#COPY nginx/nginx.conf /etc/nginx/nginx.conf
#EXPOSE 80:80
#EXPOSE 443:443
#CMD ["nginx", "-g", "daemon off;"]


