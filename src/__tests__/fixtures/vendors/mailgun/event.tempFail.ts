export default `{
    "event-data": {
        "id": "Fs7-5t81S2ispqxqDw2U4Q",
        "timestamp": 1521472262.908181,
        "log-level": "warn",
        "event": "failed",
        "reason": "generic",
        "severity": "temporary",
        "delivery-status": {
            "attempt-no": 1,
            "certificate-verified": true,
            "code": 452,
            "description": null,
            "enhanced-code": "4.2.2",
            "message": "4.2.2 The email account that you tried to reach is over quota. Please direct 4.2.2 the recipient to 4.2.2  https://support.example.com/mail/?p=422",
            "mx-host": "smtp-in.example.com",
            "retry-seconds": 600,
            "session-seconds": 0.1281740665435791,
            "tls": true,
            "utf8": true
        },
        "flags": {
            "is-authenticated": true,
            "is-routed": false,
            "is-system-test": false,
            "is-test-mode": false
        },
        "envelope": {
            "sender": "bob@m.nokori.com",
            "transport": "smtp",
            "targets": "alice@example.com",
            "sending-ip": "209.61.154.250"
        },
        "message": {
            "attachments": [],
            "headers": {
                "message-id": "20230608161542.b1c7ff03b1021ec8@m.nokori.com",
                "from": "Bob <bob@m.nokori.com>",
                "to": "Alice <alice@example.com>",
                "subject": "Test delivered webhook"
            },
            "size": 111
        },
        "recipient": "alice@example.com",
        "recipient-domain": "example.com",
        "storage": {
            "key": "message_key",
            "url": "https:\/\/se.api.mailgun.net\/v3\/domains\/m.nokori.com\/messages\/message_key"
        },
        "campaigns": [],
        "tags": [
            "my_tag_1",
            "my_tag_2"
        ],
        "user-variables": {
            "my_var_1": "Mailgun Variable #1",
            "my-var-2": "awesome"
        }
    }
}`
