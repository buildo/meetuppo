# meetuppo
meetuppo reads events from meetup.com and posts them on slack

## how to run

```bash
docker run -e MEETUP_KEY={your meetup key} -e SLACK_WEBHOOK={your slack webhook} -e SCHEDULE='* * * * *' quay.io/buildo/metuppo:latest
```
