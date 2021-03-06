# Mute Politics on Twitter

This is a resource intended to help you eliminate politics from your  information diet. For now (and in anticipation of the Nov 6 elections in the U.S.), I've only covered U.S. Politics on Twitter (and I'm unfortunately only just scratching the surface).

Blocking *all* politics is not something I necessarily advocate for everyone. It just so happens that I have 0 interest in the U.S. Political system but have found it difficult to abstain from it online, particularly around election season. You can find more detail in this blog post I wrote.

This is a work in progress. If you use the list of accounts or the list of words and something still slips through, quote retweet it and mention [@MutePolitics](https://twitter.com/MutePolitics) so I can investigate and improve my approach. If you have suggestions for improvements you can tweet me directly at [@jessems](https://twitter.com/JesseMS). Thanks!

## Instructions

There are 2 ways in which Twitter allows you to filter things from your feed. You can:

1. Block or mute an account e.g. @realDonaldTrump
2. You can mute a word e.g. "hillary"

These are two very crude ways to filter your feed, but unfortunately it's the only thing Twitter offers at the moment. As part of Mute Politics I've included some resources that utilize both approaches.

(A note on the block list files. They are .csv files which contain a list of user account *numeric* ids. Twitter requires the number ids as opposed to the twitter handle as well as a .csv even though the file contains no commas.)

### How to Import a Block List of Twitter Accounts (On the web)

![Explanainer Video](images/screencast.gif)

Preparation: Select and a block user list (e.g. [us_politics_all](us_politics_all.csv) and click "Raw" to view the raw file. Then click File > Save as in your browser to save as a .csv. Read more [here](#blocking-all-accounts-related-to-us-politics))

Step 1: Click on your profile icon on the top right

Step 2: Click "Settings and Privacy"

Step 3: Click "Blocked Accounts"

Step 4: Click "Advanced Options"

Step 5: Click "Import a list"

Step 6: Click "Attach a file to upload" and navigate to one of the provided user block lists

Step 7: Click "Preview" to preview the accounts that will be blocked

Step 8: Click "Block" to initiate the blocking

And you're done!

### How to Mute Words on Twitter

Step 1: Click on your profile icon on the top right

Step 2: Click "Settings and Privacy"

Step 3: Click "Muted words"

Step 4: Click "Add" to add words


### Blocking All Accounts Related to U.S. Politics

Note: Read [how to import a block list of Twitter accounts](#how to-import-a-block-list-of-twitter-accounts-on-the-web) for instructions on how to use the below lists.

You can block everyone that I cover that is related to U.S. Politics by using the blocklist [us_politics_all](us_politics_all.csv). Currently this blocks Twitter accounts corresponding to members of:
- U.S. Cabinet (aka Trump admin, including Trump & Pence)
- U.S. Senate
- U.S. Congress
- U.S. Election "Partners" (e.g. State level Secretary of State)

Some things that are notably missing here are lists of accounts to block for:
- U.S. Senate Candidates (e.g. campaigning politicians)
- U.S. Political Journalists
- U.S. Political Publications
- Probably more...

You can find the import block list of all U.S. Politics here: us_politics_all.csv.

### Blocking Specific Types of Accounts in U.S. Politics

Note: Read How to import a block list of Twitter Accounts](#how to-import-a-block-list-of-twitter-accounts) for instructions on how to use the below lists.

If blocking all categories of accounts pertaining to U.S. Politics is too coarse, you can choose to block specific group of accounts only e.g. block U.S. Cabinet only.

You can find the specific block lists here:
- [U.S. Cabinet](us_cabinet.csv) (includes Trump & Pence)
- [U.S. Senate](us_senate.csv)
- [U.S. Congress](us_congress.csv)
- [U.S. Election "Partners"](us_election_partners.csv) (e.g. State level Secretary of State)
- [U.S. Politics-focused Media](us_politics_focused_media.csv) (e.g. The Hill)

## Mute Politics: US Keywords

The second approach is using Twitter's mute keywords option available through Settings > Mute Keywords. This is a very crude method and you should take note of some things before you proceed:

- You can only mute 200 keywords at any given time
- Muting words in an attempt to mute politics is very prone to introducing false positives. Muting the word "president" will mute tweets containing "president trump" but also a tweet about a "university president"
- Muting "gop" will not block "gop2018"
- You will not be made aware when a tweet gets muted from your timeline

For the reasons above I've limited the muted word list for U.S. Politics to the words that are the most likely to mute political content and simultaneously the least likely to generate false positives. One thing you may want to consider is expanding the list with worse such as "vote" and "president" but set a time limit within Twitter's interface so the word becomes unmuted after, say, the election cycle.

warren  
buttigieg  
potus  
alt right
alt-right  
clinton  
bush  
whitehouse  
legislation  
gop  
republicans  
republican  
democrats  
democrat  
trump  
pence  
kavanaugh  
hillary  
shillary  
nazi  
drumpf  
conservative  
liberal  
FBI  
DOJ  
obama  
federal government  
u.s. ambassador  
judiciary  
nevertrump  
