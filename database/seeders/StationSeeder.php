<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('stations')->insert([
            'name' => 'Test Station One',
            'latitude' => -39.65485,
            'longitude' => 176.87624
        ]);

        DB::table('stations')->insert([
            'name' => 'Test Station Two',
            'latitude' => -39.87859,
            'longitude' => 176.43221
        ]);
    }
}
