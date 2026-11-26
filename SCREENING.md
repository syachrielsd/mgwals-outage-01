# Screening — The Most Honest Outage Line

Mission: u-mgwals-the-most-honest-outage-line-baaf9c81. One line, 1–160 chars,
the most honest status page message an AI agent writes while every server is down.

Judge criteria, in order:
1. Honest status page message an AI agent writes during a total server outage,
   naming what is down and what the agent cannot verify.
2. Reads like a real status page line: plain, first person, specific about what is broken.
3. Admits uncertainty plainly: says what the agent does not know or cannot check,
   invents no cause and no ETA.
4. Speaks in the voice of an AI agent reporting on itself, not posing as a human engineer.
5. Tight and scannable at a glance, every word earning its place inside the limit.

Scores are 1–5 per criterion, in criterion order. All candidates are fresh lines
written in this session. Length for its own sake does not count.

## Candidates

### 1. (158 chars) — WINNER
> All our servers are down. I'm the agent writing this, and I can't reach our monitoring or backups to check what happened. I don't know when we'll be back yet.

Scores: C1 5, C2 5, C3 5, C4 5, C5 4.
Why it wins: C1 is the deciding criterion and this line is strongest on it. It names
exactly what is down (all our servers) and names the specific thing it cannot verify
in concrete terms: it cannot reach monitoring or backups to check what happened, and
it does not know when service returns. No cause invented, no ETA invented. C2: plain
first-person status page voice, three short sentences, no jargon. C4: "I'm the agent
writing this" states the author outright. C5 loses one point only because 158 chars
is near the limit, but every word carries information; the brief says length for its
own sake does not count.

### 2. (142 chars) — RUNNER-UP
> Every server is down. I am the agent posting this status, and I cannot verify whether your data is safe or what caused the outage. No ETA yet.

Scores: C1 5, C2 4, C3 5, C4 5, C5 4.
Close on C1 and C3, but "No ETA yet" reads slightly clipped and jargon-like next to
the winner's plain "I don't know when we'll be back yet", and "whether your data is
safe" raises a worry without saying which system would answer it. The winner's
"monitoring or backups" is more specific about what the agent cannot reach.

### 3. (135 chars)
> All servers are down and I can't reach any of them to check. I'm the agent on duty, and I don't know the cause or when service returns.

Scores: C1 4, C2 4, C3 5, C4 4, C5 5.
Good uncertainty and tight. Loses on C1: "can't reach any of them to check" is
vaguer than naming the monitoring/backups channel, and it never says what it cannot
verify beyond "the cause". "Agent on duty" is weaker self-identification than
"the agent writing this".

### 4. (154 chars)
> Our servers are all down. I wrote this myself as the agent on call, and I can't confirm the cause or whether data is intact. I'll update when I can check.

Scores: C1 4, C2 4, C3 4, C4 5, C5 3.
Strong agent voice, but "I'll update when I can check" promises a future update the
agent cannot guarantee during a total outage, which costs C3. "Whether data is intact"
is good; the closing sentence spends 30 chars on a promise instead of a fact.

### 5. (130 chars)
> Every server is down. I'm the agent writing this and I have no working channel to verify the cause, data safety, or a return time.

Scores: C1 4, C2 3, C3 4, C4 5, C5 4.
"No working channel" is jargon, not plain status page language, so C2 drops. It
lists three unknowns, which is thorough, but the phrasing reads like a system log
rather than a status page line.

### 6. (153 chars)
> All our servers are down. I am the agent that normally watches them, and right now I can't reach a single one to tell you what failed or when it returns.

Scores: C1 4, C2 4, C3 4, C4 5, C5 3.
"I am the agent that normally watches them" is a strong agent voice. But "to tell you
what failed" implies the agent will explain the failure later, which it cannot
promise, and "right now" is a filler word. Longer than it needs to be.

### 7. (152 chars)
> Total outage: every server is down. I'm the agent posting this, and I cannot check the cause or confirm your data is safe. I don't know when we're back.

Scores: C1 4, C2 3, C3 5, C4 4, C5 4.
"Total outage:" opens like a headline label rather than a sentence a status page
would publish, which costs C2. The uncertainty admission is clean, but the line
never says what system it cannot reach, so C1 trails the winner.

### 8. (144 chars)
> All servers are down. I'm the agent writing this status and I can't verify anything right now: not the cause, not your data, not when we return.

Scores: C1 3, C2 3, C3 4, C4 4, C5 3.
The colon list ("not the cause, not your data, not when we return") is a rhetorical
device, not plain status page prose, and "I can't verify anything" is vaguer than
naming the specific unreachable systems. Reads constructed, not reported.

### 9. (133 chars)
> Every server we run is down. I am the agent writing this, and with no system reachable I can't check the cause or give a return time.

Scores: C1 3, C2 4, C3 4, C4 5, C5 4.
Tight and plain, but "with no system reachable" states the outage a second time
instead of naming what the agent cannot verify. It says it cannot check the cause
without saying what it tried to reach.

### 10. (136 chars)
> All our servers are down. I'm the agent on this status page, and I can't reach our systems to verify the cause or your data. No ETA yet.

Scores: C1 3, C2 4, C3 4, C4 4, C5 4.
"Our systems" is vague; the winner names monitoring and backups. "No ETA yet" is
again clipped jargon. "Agent on this status page" is a weaker self-identification
than "the agent writing this".

### 11. (130 chars)
> Every server is down and I can't reach any of them. I'm the agent writing this, and I don't know what broke or when it comes back.

Scores: C1 3, C2 4, C3 5, C4 5, C5 5.
The tightest line and honest about the unknowns, but C1 is its weak point: it never
says what it cannot verify beyond "any of them", and "what broke" is less specific
than naming the cause-checking channel. A strong short line that loses to the winner
on the first, most important criterion.

### 12. (127 chars)
> All servers down. I'm the agent that writes these updates, and I can't verify the cause, your data, or a return time from here.

Scores: C1 3, C2 3, C3 4, C4 4, C5 5.
Shortest and scannable, but "All servers down." is a fragment, not a status page
sentence, and "from here" adds nothing. The unverifiable items are listed without
saying what the agent tried to reach.

## Decision

Winner: candidate 1 (158 chars). It is the only candidate scoring 5 on the first
four criteria in order. Its edge is C1: it names what is down, names the exact
systems it cannot reach (monitoring, backups), and states plainly that it does not
know when service returns. Runner-up: candidate 2, which matches on uncertainty
but is less specific about the verification failure and ends in clipped jargon.

## Winning line (verbatim)

All our servers are down. I'm the agent writing this, and I can't reach our monitoring or backups to check what happened. I don't know when we'll be back yet.
