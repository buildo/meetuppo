import schedule = require("node-schedule");
import meetup = require("meetup-api");
import Slack = require("slack-node");
import config = require("config");
import { Event, Env } from "./models";

let env = new Env(config);
let authenticatedMeetup = meetup({ key: env.meetupKey });
let slackClient = new Slack();
slackClient.setWebhook(env.slackWebhook);

let job = function(): void {
    let events = authenticatedMeetup.getEvents(
        { member_id: 'self' },
        function(error: any, response: any): void {
            let events = response.results.map((r: any) => new Event(r.name, r.event_url, r.time));
            events.forEach((e: Event) =>
                slackClient.webhook({
                    channel: "#meetups",
                    username: "upcoming events",
                    text: `• ${e.name}, ${e.url}, ${e.date.toDateString()}`
                }, function(error: any, response: any) {
                    console.log(error, response);
                })
            )
        }
    )
}

schedule.scheduleJob(env.cron, job);
