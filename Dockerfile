FROM node:14.10.0-alpine

# SETUP WORKDIR AND COPY FILES
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

# INSTALL PACKAGES AND COPY PROJECT FILES
RUN yarn
COPY . .

# DEFAULT EXPOSE PORT.
EXPOSE ${APP_PORT}

CMD [ "yarn", "dev" ]
