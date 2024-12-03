export type Startup = {
  id: string;
  created_at: string;
  company_name: string;
  company_image: string;
  company_tagline: string;
  company_website: string;
  product_hunt_id: string | null;
};

export type Bet = {
  id: string;
  created_at: string;
  bet_id: string;
  company_id: string;
};

export type BetData = {
  protocol_id: string;
  protocol_created_by: string;
  protocol_title: string;
  protocol_steps: string;
  protocol_end_date: string;
  protocol_start_date: string;
  protocol_updated_at: string;
  protocol_created_at: string;
  protocol_completed: boolean;
  protocol_falsifiable_hypothesis: string;
  protocol_daily_question: string;
  protocol_project_id: string;
  bet_type: string;
  possible_answers: {
    answer_id: string;
    answer_text: string;
  }[];
  correct_answer: string | null;
  answer_rules: {
    frequency: string;
    validation_criteria: string;
  };
  project_image_url: string;
  archived: boolean;
};
