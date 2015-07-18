#!/usr/bin/env bats

@test 'it echos the input' {
  [[ $(APP_NAME -o 'hello') = 'hello' ]]
}
