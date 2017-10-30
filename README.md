# Clojure News [![Build Status](https://travis-ci.org/ertugrulcetin/ClojureNews.svg?branch=master)](https://travis-ci.org/ertugrulcetin/ClojureNews) [![GitHub License](https://img.shields.io/badge/license-Apache-blue.svg)](https://raw.githubusercontent.com/ertugrulcetin/ClojureNews/master/LICENSE.md?token=AH41u-vB3sgHpWa6UrI6HlJbAY8ws3TMks5XjNzrwA%3D%3D) 


![Clojure News Demo](/github-img-clojure-news.png)

## Requirements

* JDK/Clojure 1.8+
* Leiningen
* Heroku(Free Plan)
* mLab(Heroku Add-on)

## Installation

### Installing on Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

### Installing locally

* Install [leiningen](http://leiningen.org/)
* Install [MongoDB](https://www.mongodb.com/download-center?jmp=nav#community)
* Create a new MongoDB database
* Create a new user for the new database

* `git clone https://github.com/ertugrulcetin/ClojureNews.git`
* Edit `src/clj/dao/db_conf.clj` with the new db and credentials
* `lein run`

## Contributing

Feel free to jump in if you don't mind digging around, you can check out the [issues](https://github.com/ertugrulcetin/ClojureNews/issues)  page for ideas on what to work on.

## Contributors

[Ertuğrul Çetin](https://github.com/ertugrulcetin)

[Jordan Biserkov](https://github.com/Biserkov)

[Mengu Kagan](https://github.com/mengu)

## License

```
  Copyright 2016 Ertuğrul Çetin
  
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  
  http://www.apache.org/licenses/LICENSE-2.0
  
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
```
