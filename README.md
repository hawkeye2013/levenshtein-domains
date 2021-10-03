# Levenshtein Domains

This repo is a submission for a CS 6387-50 homework assignment. The purpose of this repo is to provide a mechanism to validate a domain using the Levenshtein distance.

## Installing

Requires Node V14.X

- Clone the Repo
- Run `npm install`

## Running

Run `node .` while in the root folder to run the project.

## Entry Point

`index.js` is the entry point for the project.

## Overview

This repo has an example already set up. Given a list of trusted domains, the provided function `getRiskyDomains` will use the [Levenshtein Distance](https://en.wikipedia.org/wiki/Levenshtein_distance) to get the closest domain. If that domain is over the threshold (second argument), it will be returned as a risky domain.
