import { ProfileSchool } from "./ProfileSchool";
import { ProfileReviewer } from "./ProfileReviewer";
import { reviewItemTheme } from "./ReviewItem.theme";
import { Button } from "@/common/components/Button";
import { ThumbUpFilledIcon } from "@/common/components/CustomIcon";
import { getHumanReadableTimestampDelta } from "@/common/functions";
import { type Review } from "@/common/types";

export const ReviewHeader = ({
  review,
  variant,
}: {
  review: Review;
  variant: "home" | "professor" | "course";
}) => {
  const { headingContainer, metadataContainer, timedelta } = reviewItemTheme();
  return (
    <div className={headingContainer()}>
      {variant === "home" ? (
        <ProfileSchool
          courseCode={review.courseCode}
          university={review.university}
        />
      ) : (
        <ProfileReviewer name={review.username} />
      )}
      <div className={metadataContainer()}>
        {variant === "home" && <ProfileReviewer name={review.username} />}
        {variant === "professor" && (
          <ProfileSchool
            courseCode={review.courseCode}
            university={review.university}
          />
        )}
        <Button
          rounded
          variant="secondary"
          size="sm"
          iconRight={<ThumbUpFilledIcon />}
        >
          {review.likeCount}
        </Button>
        <div className={timedelta()}>
          {getHumanReadableTimestampDelta(review.createdAt / 1000)}
        </div>
      </div>
    </div>
  );
};
