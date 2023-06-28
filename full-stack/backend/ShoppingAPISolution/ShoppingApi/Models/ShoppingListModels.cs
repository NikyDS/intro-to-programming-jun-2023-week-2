﻿namespace ShoppingApi.Models;

public record ShoppingListItemModel
{
    public string Id { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public bool Purchased { get; init; }
}

public record CollectionResponse<T>
{
    public List<T> Data { get; set; } = new();

}