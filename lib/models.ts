import config = require("config");

export class Event {
    name: string;
    url: string;
    date: Date;
    constructor(name: string, url: string, utimestamp: number) {
        this.name = name;
        this.url = "<"+url+">";
        this.date = new Date(utimestamp);
    }
}

export class Env {
    meetupKey: string;
    slackWebhook: string; 
    cron: string;
    constructor(iconfig: config.IConfig) {
        this.meetupKey = iconfig.get<string>('meetupKey'),
        this.slackWebhook = iconfig.get<string>('slackWebhook'),
        this.cron = iconfig.get<string>('schedule')
    };
}
