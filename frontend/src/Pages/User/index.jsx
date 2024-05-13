import React, { useEffect } from "react";
import Posts from "../../Components/Posts";
import { useDispatch, useSelector } from "react-redux";
import { getPostsByUserId } from "../../app/actions/post.actions";
import PostAdd from "../../Components/PostAdd";
import UserProfile from "./user-profile";
import SharedPosts from "../SharedPosts";
import WorkoutPostAdd from "../../Components/WorkoutPostAdd/WorkoutPostAdd";
import MealPostAdd from "../../Components/MealPostAdd/MealPostAdd";
import WorkoutPlanPost from "../../Components/WorkoutPlanPost/WorkoutPlanPost";

function User() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user.userId) {
      dispatch(getPostsByUserId(user.userId));
    }

  }, [dispatch, user.userId]);


  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-2">
          {/* <UserProfile /> */}
          <div className="card post-card bg-white p-3">
            <h1 className="fw-bolder text-uppercase">Info</h1>
            <p>Add posts for each category based on your interests and more</p>
            <p>Browse posts as shared an posted</p>
          </div>
        </div>
        <div className="col-md-6">
          <nav>
            <div class="nav nav-tabs tab-profile bg-dark p-2" id="nav-tab" role="tablist">
              <button
                class="nav-link active rounded-pill fw-bold"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                POSTS
              </button>
              <button
                class="nav-link rounded-pill ms-3 text-danger fw-bold"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                SHARED POSTS
              </button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <Posts posts={post.posts} fetchType="GET_ALL_USER_POSTS" />
            </div>
            <div
              class="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <SharedPosts />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <nav>
            <div class="nav nav-tabs tab-profile bg-dark p-2" id="nav-tab" role="tablist">
              <button
                class="nav-link active rounded-pill text-success fw-bold"
                id="nav-posts-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-posts"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Post
              </button>
              <button
                class="nav-link rounded-pill ms-3 text-danger fw-bold"
                id="nav-meal-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-meal"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Meal plan
              </button>
              <button
                class="nav-link rounded-pill ms-3 text-danger fw-bold"
                id="nav-workout-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-workout"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Workouts
              </button>
              <button
                class="nav-link rounded-pill ms-3 text-danger fw-bold"
                id="nav-workout-plan-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-workout-plan"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Workout Plan
              </button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-posts"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <PostAdd
                title={'Add Posts'}
                description={'Add a posts that takes your interest'}
              />
            </div>
            <div
              class="tab-pane fade"
              id="nav-meal"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <MealPostAdd
                title={'Add Meal Post'}
                description={'Add a posts that takes your interest'}
              />
            </div>
            <div
              class="tab-pane fade"
              id="nav-workout"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <WorkoutPostAdd
                title={'Add Workout Posts'}
                description={'Add a posts that takes your interest'}
              />
            </div>
            <div
              class="tab-pane fade"
              id="nav-workout-plan"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <WorkoutPlanPost
                title={'Add Workout Plans'}
                description={'Add a posts that takes your interest'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
