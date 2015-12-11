# Readme

Welcome! This is the GitHub repo for Thought Lounge's new Squarespace site. Currently it is being hosted at m1tlwebdev.squarespace.com.

Thought Lounge is currently building a new website, and it's interesting in the way it's set up because it utilizes both SS and meteor.js. We will host the squarespace site on thoughtlounge.org and the meteor.js app on doatl.thoughtlounge.org. For the meteor.js GitHub repo, check out axelzcramer/thoughtlounge.

## About this repo
This repo is used to take snapshots of the code that's being used for the squarespace site, so that if we screw anything up then we can always pull down a previous commit, replace our code and work from there. We're using SFTP which pushes all our changes live instantly unless we sandbox it first on a trial development site, which we only do if it's for big scary changes like to large parts of the Home page.  

## Workflow
The workflow is as follows: We have 1 main developer who SFTP's new live code from Sublime Text to the SS site. Whenever there have been enough changes made to make it worth his while to get it saved, s/he replaces his code in his local thoughtloungeSS repo folder with a copy of his current code. He then pushes up to axelzcramer/thoughtloungeSS and voila! S/he is saving code without having to store a billion commits on his computer. Thanks Github!

## So What is Thought Lounge?
Thought Lounge is a nonprofit organization consisting of initiatives aimed at fostering true dialogue. TL utilizes Lean Startup Methodologies to learn with communities what true dialogue is, create innovative settings that provide it, and make communities aware of the opportunity to participate in such settings. Although originally formed to enhance the college campus experience, TL has since demonstrated its potential to impact almost any community, whether that be universities, companies, senior centers, or national governments.
