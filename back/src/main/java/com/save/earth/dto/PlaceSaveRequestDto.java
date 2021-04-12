package com.save.earth.dto;

import com.save.earth.domain.Place;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;

@Getter
@Setter
@NoArgsConstructor
public class PlaceSaveRequestDto {

    private String name;

    private String address;

    private String imgUrl;

    private String category;

    private String contents;

    private int allMenuVegan;

    @Builder
    public PlaceSaveRequestDto(String name, String address, String imgUrl, String category, String contents, int allMenuVegan) {
        this.name = name;
        this.address = address;
        this.imgUrl = imgUrl;
        this.category = category;
        this.contents = contents;
        this.allMenuVegan = allMenuVegan;
    }

    public Place toEntity(){
        return Place.builder().name(name).address(address).imgUrl(imgUrl).category(category).contents(contents).allMenuVegan(allMenuVegan).build();
    }

}
