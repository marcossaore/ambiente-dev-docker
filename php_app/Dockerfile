FROM php:7.4-fpm-alpine
 
RUN apk update --no-cache \
&& apk add \
icu-dev \
oniguruma-dev \
tzdata

RUN apk add --no-cache --virtual .build-deps \
g++ make autoconf yaml-dev

RUN pecl install igbinary-3.1.2 \
pecl install redis-5.1.1 \
pecl install xdebug-2.9.0 
 
RUN docker-php-ext-install intl
RUN docker-php-ext-install pcntl
RUN docker-php-ext-install pdo_mysql
RUN docker-php-ext-install mbstring
RUN docker-php-ext-enable igbinary.so 
RUN docker-php-ext-enable redis.so
RUN docker-php-ext-enable xdebug 
 
RUN rm -rf /var/cache/apk/*
RUN apk del --purge .build-deps
 
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin --filename=composer

COPY php.ini /usr/local/etc/php/php.ini
 
CMD ["php-fpm"]
