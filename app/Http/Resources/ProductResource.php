<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Transform the resource into an array.
 *
 * @mixin \App\Models\Product
 */
class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [

            'created_at' => $this->created_at,
            'description' => $this->description,
            'id' => $this->id,
            'name' => $this->name,
            'price' => $this->price,
            'updated_at' => $this->updated_at
        ];
    }
}
