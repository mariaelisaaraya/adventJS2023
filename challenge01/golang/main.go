package main

func findFirstRepeated(gifts []int) int {
	seenGifts := make(map[int]bool)

	for _, gift := range gifts {
		if seenGifts[gift] {
			return gift
		}
		seenGifts[gift] = true
	}

	return -1
}
