package derivean.lib.job

enum class JobState {
	CREATED,
	SCHEDULED,
	QUEUED,
	WAITING,
	RUNNING,
	SUCCESSFUL,
	FAILED,
}
