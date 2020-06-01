# README #

### How to run backend (ruby on rails) ###

* cd ./backend
* bundle install
* add your database.yml file at ./backend/config/database.yml
* rake db:create db:migrate
* rails s

### How to run Test ###
* cd ./backend
* RAILS_ENV=test rake db:create
* rake db:test:prepare
* rspec spec/models/question_spec.rb