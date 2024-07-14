package com.scorer.apis.services;

import java.util.List;

import com.scorer.apis.entities.Match;

public interface MatchService {
    //to extract all matches
    List<Match> getAllMatches();
    //to extract all but live matches
    List<Match> getLiveMatches();
    //points table
    List<List<String>> getPointsTable();
}
