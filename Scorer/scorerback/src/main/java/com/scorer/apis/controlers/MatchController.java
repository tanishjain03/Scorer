package com.scorer.apis.controlers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.scorer.apis.entities.Match;
import com.scorer.apis.services.MatchService;


@RestController
@RequestMapping("/match")
@CrossOrigin("*")
public class MatchController {
    private MatchService matchService;
    
    public MatchController(MatchService matchService) {
        this.matchService = matchService;
    }

    @GetMapping("/liveMatches")
    public ResponseEntity<List<Match>> getLiveMatches() {
        return new ResponseEntity<>(this.matchService.getLiveMatches(),HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Match>> getAllMatches() {
        return new ResponseEntity<>(this.matchService.getAllMatches(),HttpStatus.OK);
    }

    @GetMapping("/points-table-t20-world-cup-2024")
    public ResponseEntity<?> getPointsTable() {
        return new ResponseEntity<>(this.matchService.getPointsTable(),HttpStatus.OK);
    }
}