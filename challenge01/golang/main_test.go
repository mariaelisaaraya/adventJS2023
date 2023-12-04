package main

import "testing"

func TestFindFirstRepeated(t *testing.T) {
	tests := []struct {
		name     string
		gifts    []int
		expected int
	}{
		{"Example 1", []int{2, 1, 3, 5, 3, 2}, 3},
		{"Example 2", []int{1, 2, 3, 4}, -1},
		{"Example 3", []int{5, 1, 5, 1}, 5},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := findFirstRepeated(tt.gifts)
			if result != tt.expected {
				t.Errorf("Expected %d, but got %d", tt.expected, result)
			}
		})
	}
}
